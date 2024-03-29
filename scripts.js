// import { list } from "list.js";
let btn = document.getElementsByClassName("btn")[0];
let questions = document.getElementsByClassName("questions")[0];
let submit = document.getElementsByClassName("btn_submit")[0];
let hero =  document.getElementsByClassName("hero")[0];
let menu_bg = document.getElementsByClassName("menu_bg")[0];
let menu = document.getElementsByClassName("menu")[0];
let exit = document.getElementsByClassName("exit")[0];
let leftBtn = document.getElementsByClassName("button-left")[0];
let rightBtn = document.getElementsByClassName("button-right")[0];
let slideInxed = 0;
let kolList = {'авиа':0, 'аид':0, 'био':0, 'видр':0, 'зх':0, 'иэ':0, 'иб':0, 'икт':0, 'лазеры':0, 'машины':0, 'нано':0, 'природа':0, 'роботы':0, 'эис':0, 'эб':0};
let direction = ['авиа', 'аид', 'био', 'видр', 'зх', 'иэ', 'иб', 'икт', 'лазеры', 'машины', 'нано', 'природа', 'роботы', 'эис', 'эб'];
let textList = {
    'авиа': [
        "Авиакосмические технологии",
        "На этом направлении вы:",
        "ознакомитесь с историей развития авиации и космонавтики.",
        "изучите и проанализируете основные передовые технологии, используемые при создании пилотируемых и беспилотных летательных аппаратов самолетного и вертолетного типа, космических аппаратов.",
        "разработаете проекты космических аппаратов и инновационных летательных аппаратов."
    ],
    'аид':[
        "Архитектура и дизайн",
        "На этом направлении вы:",
        "ознакомитесь с основами архитектуры, дизайна и проектирования архитектурно-дизайнерских объектов, компьютерной графики.",
        "изучите  основы архитектурной колористики и цветового дизайна.",
        "будете развивать практические умения и навыки проектирования и визуализации архитектурных и архитектурно-дизайнерских объектов. при разработке исследовательских проектов."
    ],
    'био':[
        "Биотехнологии",
        "На этом направлении вы:",
        "изучите возможности и перспективы развития современных биотехнологий.",
        "освоите методики определения содержания в растительном сырье биологически активных веществ.",
        "создадите на основе растительного сырья экстракты, настойки, отвары, получите функциональные продукты питания, разработаете рецептуры фиточаев, парфюмерно-косметической продукции, стимуляторов роста растений, эфирных масел и др."
    ],
    'видр':[
        "Виртуальная и дополненная реальность",
        "На этом направлении вы:",
        "ознакомитесь с историей развития технологий VR и AR, их современным состоянием, сферами применения, перспективами использования.",
        "ознакомитесь с основами программирования на языке C# и использования платформы Unity.",
        "будете создавать AR,VR-приложения в Unity."
    ],
    'зх':[
        "Зелёная химия",
        "На этом направлении вы:",
        "ознакомитесь с состоянием, перспективами развития и принципами «зеленой» химии и «зеленых» технологий.",
        "освоите навыки получения биоразлагаемых пленок и покрытий для упаковки пищевых продуктов.",
        "ознакомитесь с теоретическими основами молекулярной гастрономии."
    ],
    'иэ':[
        "Инженерная экология",
        "На этом направлении вы:",
        "ознакомиетсь с основными нормативными правовыми актами Республики Беларусь в области охраны окружающей среды, программами и мероприятиями по охране окружающей среды, их характеристиками.",
        "изучите основы экологического нормирования, нормативы качества окружающей среды.",
        "ознакомитесь с основными показателями, характеризующими воздействие на окружающую среду, методиками их расчета."
    ],
    'иб':[
        "Информационная безопасность",
        "На этом направлении вы:",
        "ознакомитесь с методологией информационной безопасности и терминологией, применяемой в данной сфере.",
        "изучите архитектуру информационных сетей и систем, принципы их функционирования.",
        "изучите программно-аппаратные средства защиты информации и получите практические навыки по их настройке."
    ],
    'икт':[
        "Информационные и компьютерные технологии",
        "На этом направлении вы:",
        "изучите возможности и основные элементы языка разметки HTML.",
        "расширите знания об основных CSS-свойствах, используемых при стилизации веб-страниц, основных CSS-селекторах.",
        "решите логические задачи, связанные с разработкой архитектуры веб-страницы."

    ],
    'лазеры':[
        "Лазерные технологии",
        "На этом направлении вы:",
        "ознакомитесь с основами работы в графических программных пакетах компьютерного проектирования, принципами создания 3D-моделей деталей и узлов лазерных устройств, принципами создания 2D-чертежей деталей для лазерной резки, маркировки и гравировки, а также векторной графикой.",
        "овладеете умениями рассчитывать основные технические параметры лазеров, подбирать на их основе соответствующие источники излучения, определять параметры лазерного излучения.",
        "будете развивать навыки применения математического аппарата при проведении компьютерного моделирования, теоретических и экспериментальных исследований, а также решении конкретных задач в области лазерных технологий."
    ],
    'машины':[
        "Машины и двигатели. Автомобилестроение",
        "На этом направлении вы:",
        "ознакомитесь с историей и перспективами развития автомобильной техники.",
        "изучите конструкции, особенности и принципы работы бензинового, дизельного двигателей внутреннего сгорания и электродвигателей.",
        "формировать навыки решения теоретических и практических задач в области разработки, проектировать и совершенствовать автомобили и двигатели."
    ],   
    'нано':[
        "Наноиндустрия и нанотехнологии",
        "На этом направлении вы:",
        "ознакомитесь со стратегиями получения и использования низкоразмерных структур и объектов",
        "освоите способы получения наноразмерных структур и тонких пленок.",
        "будете развивать умения и навыки работы с нанообъектами, получения наноструктур химическими методами."
    ],
    'природа':[
        "Природные ресурсы",
        "На этом направлении вы:",
        "изучите особенности строения Земли как космического тела, основных ее геосфер.",
        "изучите многообразие органического мира прошлых геологических эпох.",
        "освоите умения и навыки определения основных породообразующих минералов, органических остатков в горных породах, их идентификации и описания."
    ],
    'роботы':[
        "Робототехника",
        "На этом направлении вы:",
        "изучите структуру микроконтроллеров AVR и критериев настройки аппаратных блоков контроллера.",
        "ознакомитесь с языками и системами программирования промышленных роботов.",
        "создадите 3D-модели разрабатываемых устройств и чертежей."
    ],
    'эис':[
        "Электроника и связь",
        "На этом направлении вы:",
        "ознакомитесь с основными электронными компонентами, принципами их устройства и функционирования.",
        "изучите способы коммутации и технологий распределения информации.",
        "будете развивать навыки работы с приборами, оборудованием, электро- и радиомонтажным инструментом, паяльной станцией."
    ],
    'эб':[
        "Энергетика будущего",
        "На этом направлении вы:",
        "ознакомитесь с наиболее распространенными видами возобновляемых источников энергии.",
        "изучите физические законы, лежащие в основе протекания ядерных реакций.",
        "приобретете навыки выполнения расчетов и выбора оборудования для создания реальных установок и внедрения их в действующую энергосистему."
    ]
}
// document.addEventListener("click", (e) => { e.target.remove();  e.stopImmediatePropagation();  });   

let index = 0;
Array.from(document.getElementsByTagName("label")).forEach((e, index) => {
    
    e.id = index;
});

Array.from(document.querySelectorAll("label > input")).forEach((e, index) => {
    
    e.id = index;
});

btn.addEventListener("click", () => {

    questions.style.display = "flex"; 
    questions.scrollIntoView();   
});

let i = 0;
let maxList = [];

submit.addEventListener("click", () => {

    hero.scrollIntoView();

    i = 0;
    maxList = [];

    kolList = {'авиа':0, 'аид':0, 'био':0, 'видр':0, 'зх':0, 'иэ':0, 'иб':0, 'икт':0, 'лазеры':0, 'машины':0, 'нано':0, 'природа':0, 'роботы':0, 'эис':0, 'эб':0};;

    Array.from(document.getElementsByClassName('checkbox')).forEach((el)=>{

        if (el.checked) {

            el.value.split(",").forEach((e) => {
    
                // console.log(e);
                kolList[e]++;
            });
        }
    });
    
    menu_bg.style.zIndex = "5";
    
    let maxKol = 0;
    let maxDirection = "авиа";

    setTimeout(() => {

        menu_bg.style.background = "#0000007e";
        document.getElementsByTagName("html")[0].style = "overflow-y: hidden"; 

        menu.style.top = "25%";

        document.getElementsByClassName("title")[0].textContent = textList[maxDirection][0];
        document.getElementsByClassName("text3")[0].textContent = textList[maxDirection][1];

        document.getElementsByClassName("li")[0].textContent = textList[maxDirection][2];
        document.getElementsByClassName("li")[1].textContent = textList[maxDirection][3];
        document.getElementsByClassName("li")[2].textContent = textList[maxDirection][4];

    }, 500);


    direction.forEach((el) => {

        // console.log(el);
        
        if (kolList[el] > maxKol) {

            maxKol = kolList[el];
            maxDirection = el;
        }
    });

    // console.log(kolList);
    // console.log(maxKol);
    // console.log(maxDirection);

    direction.forEach((el) => {

        // console.log(kolList[el]);

        if (kolList[el] == maxKol) maxList[i] = el, i++;
    });

    console.log(maxList);
    console.log(maxList.length);

    leftBtn.style.display = "block";
    rightBtn.style.display = "block";

    if (maxList.length == 1) {

        // console.log("YES");
    
        // console.log(leftBtn.style.display);
        // console.log(rightBtn.style.display);
    
        leftBtn.style.display = "none";
        rightBtn.style.display = "none";
    
        // console.log(leftBtn.style.display);
        // console.log(rightBtn.style.display);
    }

});

// maxKolList = [];
// maxKolListIndex = 0;

// direction.forEach((e) => {

//     if (kolList[e] == maxKol) {

//         maxKolList[maxKolListIndex] = e;
//         maxKolListIndex++;
//     }
// })

exit.addEventListener("click", () => {

    menu.style.top = "-60%";
    menu_bg.style.background = "#00000000";
    menu_bg.style.zIndex = "-5";

    questions.style.display = "none";
    
    document.getElementsByTagName("html")[0].style = "overflow-y: visible"; 
});


leftBtn.addEventListener("click", () => {

    menu.style.opacity = "0";
    
    slideInxed--;

    if (slideInxed == -1) slideInxed = maxList.length - 1;

    // console.log(slideInxed);

    setTimeout(() => {

        document.getElementsByClassName("title")[0].textContent = textList[maxList[slideInxed]][0];
        document.getElementsByClassName("text3")[0].textContent = textList[maxList[slideInxed]][1];

        document.getElementsByClassName("li")[0].textContent = textList[maxList[slideInxed]][2];
        document.getElementsByClassName("li")[1].textContent = textList[maxList[slideInxed]][3];
        document.getElementsByClassName("li")[2].textContent = textList[maxList[slideInxed]][4];
    
        menu.style.opacity = "1";
    }, 500);
})

rightBtn.addEventListener("click", () => {

    menu.style.opacity = "0";

    slideInxed++;

    if (slideInxed == maxList.length) slideInxed = 0;

    // console.log(slideInxed);

    setTimeout(() => {


        // console.log(maxList[slideInxed]);

        document.getElementsByClassName("title")[0].textContent = textList[maxList[slideInxed]][0];
        document.getElementsByClassName("text3")[0].textContent = textList[maxList[slideInxed]][1];

        document.getElementsByClassName("li")[0].textContent = textList[maxList[slideInxed]][2];
        document.getElementsByClassName("li")[1].textContent = textList[maxList[slideInxed]][3];
        document.getElementsByClassName("li")[2].textContent = textList[maxList[slideInxed]][4];

        menu.style.opacity = "1";
        
    }, 500);

})

// console.log(document.getElementsByClassName("no-option"));

document.addEventListener("click", (element) => {

    // Array.from(document.getElementsByClassName("question")).forEach((e) => {

    //     console.log("Question");

    //     Array.from(e.children).forEach((el) => {

    //         // console.log(element.target.id);
    //         // console.log(el.firstChil d.id);

    //         // console.log(e.children[e.children.length - 1].firstChild.checked);

    //         if (e.children[e.children.length - 1].firstChild.checked == true && 
    //             element.target.id == el.firstChild.id && 
    //             element.target.id != e.children[e.children.length - 1].firstChild.id) {

    //             // console.log("YES");
    //             e.children[e.children.length - 1].firstChild.checked = false;
    //             console.log("EL checked:");
    //             console.log(el.firstChild.checked);
    //             el.firstChild.checked = true;
    //             console.log("EL checked:");
    //             console.log(el.firstChild.checked);
    //             // console.log("EL:");
    //             console.log(el.firstChild);
    //         }
    //     });
    // });

    // Array.from(document.getElementsByClassName("no-option")).forEach((e) => {
        
    //     // console.log(e.id);
    //     // console.log(element.target.id);

    //     console.log("No option");

    //     if (e.checked && e.id == element.target.id) {

    //         console.log("YeS");
    //         Array.from(e.parentNode.parentNode.children).forEach((el) => {

    //             if (el.firstChild.checked == true) el.firstChild.checked = false; 
    //         })

    //         e.checked = true;
    //     }
    // });

    // console.log(element.target.className);

    // if (element.target.className == "checkbox") console.log("Yes");

    // console.log(element.target.parentNode);
    // console.log(element.target.parentNode.lastChild);

    // if (element.className == "checkbox" && element.parentNode.parentNode.lastChild.firstChild.checked) {

    //     console.log("YES");
    //     element.parentNode.parentNode.lastChild.firstChild.checked = false;
    //     element.checked = true;
    // }
    
    // if (element.className == "check-label" && element.parentNode.lastChild.firstChild.checked) {    

    //     console.log("YES2");
    //     element.parentNode.lastChild.firstChild.checked = false;
    //     element.checked = true;
    // }   

    // Array.from(document.getElementsByClassName("checkbox")).forEach((e) => {

    //     if (e.parentNode.parentNode.lastChild.firstChild.checked) 
    // })
})

