var TestRender = TestRender || {
    items : null,
    containerSelector: "div.container-items",
    result: null,
    errRows: [],
    successCount : 0,
    errCount : 0,
    init :function () {
        var TR = TestRender;
        if (!window.Questions){
            TR.outMsg("Ошибка загрузки вопросов");
            return false;
        }
        var itemsRandom = TR.getRandom(Questions, 10);
        TR.items = itemsRandom;
        TR.render();
    },
    getRandom: function (arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    },
    render: function () {
        var TR = TestRender;
        TR.items.forEach(function(item, index){
            TR.renderItem(item, index);
        });
        TR.renderBnt();
    },
    check: function () {
        var TR = TestRender;
        var isValid = TR.validate();
        if (!isValid){
            TR.outMsg('Необходимо ответить на все вопросы');
            return false;
        }
        TR.clearResult();
        TR.loadResult();
        TR.compare();
        TR.renderErr();
        TR.outResultMsg();
    },
    validate: function () {
        var TR = TestRender;
        TR.result = [];
        var items = $('div[class*="item-"]');
        var result = true;
        items.each(function(index, item){
            var indexitem = $(item).attr('data-index');
            var icons = $("input[class='icon']", item);
            var rowIsValid = false;
            icons.each(function(indexIcon, icon){
                if(icon.checked){
                   rowIsValid = true;
                }
            });
            if (!rowIsValid){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(item).offset().top
                }, 2000);
                result = false;
                return false;
            }
        });
        return result;
    },
    outResultMsg: function () {
        var textMsg = 'Количество вопросов: ' + this.items.length;
        textMsg += '. Количество успешно выполненных: ' + this.successCount;
        textMsg += '. Количество ошибок: ' + this.errCount;
        this.outMsg(textMsg);
    },
    clearResult: function () {
        var TR = TestRender;
        TR.successCount = TR.errCount = 0;
        var items = $('div[class*="item-"]');

        $(this.containerSelector).find('div.option').removeClass('mark');

        items.each(function(index, item){
            $(item).removeClass('warning');
            $(item).removeClass('success');
        });
    },
    renderErr: function () {
        var TR = TestRender;
        var items = $('div[class*="item-"]');

        items.each(function(index, item){

            if(TR.items[index]){
                var q = TR.items[index];
                q.answers.forEach(function(p, index){
                    var option = $('input[data-var="'+p+'"]', item);
                    var container = option.parent();
                    container.addClass('mark');
                });
            }

            if(!TR.errRows[index] || TR.errRows[index].length == 0){
                $(item).addClass('success');
                return;
            }
            $(item).addClass('warning');
        });
    },
    compare: function () {
        var TR = TestRender;
        if (!TR.result){
            return false;
        }
        TR.items.forEach(function(item, index){
            var err = TR.arrayDiff(item.answers, TR.result[index], true);
            if (item.type == 'checkbox'){
                var err2 = TR.arrayDiff(item.answers, TR.result[index], false);
                err = err.concat(err2);
            }
            TR.errRows[index] = err;
            if (err.length == 0){
                TR.successCount++;
            } else {
                TR.errCount++;
            }
        });
    },
    clear: function () {
        var TR = TestRender;
        TR.clearResult();
        $("input:radio", TR.containerSelector).prop('checked', false);
        $("input:checkbox", TR.containerSelector).prop('checked', false);
    },
    arrayDiff: function (arr1, arr2, onlyErr) {
        var filteredArr1 = arr1.filter(function(ele) {
            if(!onlyErr){
                return arr2.indexOf(ele) == -1;
            }
        });

        var filteredArr2 = arr2.filter(function(ele) {
            if(onlyErr){
                return arr1.indexOf(ele) == -1;
            }
        });
        return filteredArr1.concat(filteredArr2);
    },
    loadResult: function () {
        var TR = TestRender;
        TR.result = [];
        var items = $('div[class*="item-"]');
        items.each(function(index, item){
            var indexitem = $(item).attr('data-index');
            var icons = $("input[class='icon']", item);
            icons.each(function(indexIcon, icon){
                if(!icon.checked){
                    return;
                }
                if (!TR.result[indexitem]){
                    TR.result[indexitem] = [];
                }
                TR.result[indexitem].push($(icon).attr('data-var'));
            });
        });
    },
    renderBnt: function () {

        var wrapper = document.createElement( "div" );
        wrapper.className = 'wrapper-bnt';
        $(this.containerSelector).append(wrapper);

        var bntSubmit = document.createElement( "input" );
        bntSubmit.type = 'button';
        bntSubmit.name = 'check';
        $(bntSubmit).addClass('bnt');
        $(bntSubmit).val("Проверить");
        $(bntSubmit).click(this.check);

        var bntClear = document.createElement( "input" );
        bntClear.type = 'button';
        bntClear.name = 'clear';
        $(bntClear).addClass('bnt');
        $(bntClear).click(this.clear);
        $(bntClear).val("Очистить");


        $(wrapper).append(bntSubmit);
        $(wrapper).append(bntClear);
    },
    renderItem: function (item, index) {
        var div = document.createElement( "div" );
        div.className = 'item' + '-' + index;
        $(div).attr('data-index', index);
        $(div).addClass('row');
        $( this.containerSelector ).append(div);

        var span = document.createElement( "span" );
        span.className = 'question';
        $(span).text(item.question);
        div.append(span);
        this.renderOptions(div, item);
    },
    renderOptions: function (parentNode, item) {
        var div = document.createElement( "div" );
        div.className = 'options';
        var index = $(parentNode).attr('data-index');
        parentNode.append(div);

        if (!item.options || item.options.length < 1){
            this.outMsg('Вопрос ' + item.question + ' не содержит ответов');
        }
        var options = item.options;
        for (var p in options) {
            var option = options[p];
            option = p + '. ' + option;
            var id = index + '-' + p;

            var divOption = document.createElement( "div" );
            divOption.className = 'option';

            var label = document.createElement( "label" );
            label.className = 'label';
            $(label).attr('for', id);
            $(label).text(option);

            var input = document.createElement( "input" );
            input.className = 'icon';
            input.type = item.type;
            var inputName = 'option-' + index;
            $(input).attr('data-var', p);
            $(input).attr('id', id);
            $(input).attr('name', inputName);
            divOption.append(input);
            divOption.append(label);
            div.append(divOption);
        }
    },
    outMsg: function (msg) {
        alert(msg);
    }
};

document.addEventListener("DOMContentLoaded", function (evt) {
    TestRender.init();
});