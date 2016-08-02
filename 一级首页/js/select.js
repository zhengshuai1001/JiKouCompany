        (function(){
            var $$ = function(selector) {
                if (!selector) { return []; }
                var arrEle = [];
                if (document.querySelectorAll) {
                    arrEle = document.querySelectorAll(selector);
                } else {
                    var oAll = document.getElementsByTagName("div"), lAll = oAll.length;
                    if (lAll) {
                        var i = 0;
                        for (i; i<lAll; i+=1) {
                            if (/^\./.test(selector)) {
                                if (oAll[i].className === selector.replace(".", "")) {
                                    arrEle.push(oAll[i]);
                                }
                            } else if(/^#/.test(selector)) {
                                if (oAll[i].id === selector.replace("#", "")) {
                                    arrEle.push(oAll[i]);
                                }
                            }
                        }
                    }
                }
                return arrEle;
            };
            var clsN = function (clsName, context){
                if(clsName){
                    context = context || document;
                    if(context.getElementsByClassName){
                        return context.getElementsByClassName(clsName);
                    }
                    var arr = context.getElementsByTagName('*');
                    var re = new RegExp('\\b'+className+'\\b');// var re = /className/;
                    var result = [];
                    for(var i=0; i<arr.length; i++){
                        if(  re.test(arr[i].className)  ){
                            result.push(arr[i]);
                        }
                    }
                    return result;
                }else {
                    return false;
                }
            };
            var user_y = $$('.home_content_y .user_y ');
            var home_content_y = $$('.home_content_y')[0];
            var next_page = $$('.home_content_y .next_page_y')[0];
            for(var i= 0;i< user_y.length; i++){
                var selected = $$('.user_has_active');

                selected[i].index = i;
                user_y[i].index = i;

                user_y[i].onclick = function(){
                    for(var i= 0;i< user_y.length; i++){
                        user_y[i].className = user_y[i].className.replace(/^\s*|\s*$/g,'');
                        user_y[i].className = user_y[i].className.replace(/\b(on)\b/g,'');
                        user_y[i].className = user_y[i].className.replace(/^\s*|\s*$/g,'');

                        selected[i].className = selected[i].className.replace(/^\s*|\s*$/g,'');
                        selected[i].className = selected[i].className.replace(/\b(on)\b/g,'');
                        selected[i].className = selected[i].className.replace(/^\s*|\s*$/g,'');

                        if(!clsN('on',home_content_y)[0]){
                            this.className += ' on';
                            selected[this.index].className += ' on';
                            next_page.className = next_page.className.replace(/^\s*|\s*$/g,'');
                            next_page.className = next_page.className.replace(/\b( active)\b/g,'');
                            next_page.className = next_page.className.replace(/^\s*|\s*$/g,'');
                            next_page.className += ' active';
                        }

                    }

                };


            }
        })();
