/* =========================================
   ИНФОРМАЦИЯ О ПОСЫЛКЕ SWIFTTRACK
========================================= */

const packageData = {

    trackingNumber: "ST-2026-6546",

    packageName: "Денежная сумма в размере 300 000,00 евро, подлежащая передаче Олегу Артемину",

    weight: "8.1 кг",

    deliveryFee: "€320.00",

    estimatedDelivery: "31 августа 2026 года",

    currentLocation: "Англия, Лондон",

    status: "В пути",

    progress: 0,

    latestUpdate:
        "Ваша посылка будет немедленно передана на доставку после оплаты. Пожалуйста, свяжитесь с нашим курьером для осуществления оплаты.",


    /* =========================
       ССЫЛКА ZANGI
    ========================== */

    zangiLink:
        "https://services.zangi.com/dl/conversation/3549336473",


    /* =========================
       ССЫЛКА TELEGRAM
    ========================== */

    telegramLink:
        "YOUR_TELEGRAM_LINK_HERE"

};



/* =========================================
   ОТСЛЕЖИВАНИЕ ПОСЫЛКИ
========================================= */

function trackPackage() {

    const input =
        document
        .getElementById("trackingInput")
        .value
        .trim();


    const error =
        document
        .getElementById("errorMessage");


    if (input === "") {

        error.textContent =
            "Пожалуйста, введите номер отслеживания.";

        return;
    }


    if (
        input.toUpperCase() !==
        packageData.trackingNumber.toUpperCase()
    ) {

        error.textContent =
            "Номер отслеживания не найден.";

        return;
    }


    error.textContent = "";


    /*
       Скрыть поиск посылки
    */

    document
        .querySelector(".tracking-box")
        .style.display = "none";


    /*
       Показать информацию о посылке
    */

    document
        .getElementById("packageDetails")
        .style.display = "block";



    /* =========================
       ИНФОРМАЦИЯ О ПОСЫЛКЕ
    ========================== */

    document
        .getElementById("trackingNumber")
        .textContent =
        packageData.trackingNumber;


    document
        .getElementById("packageName")
        .textContent =
        packageData.packageName;


    document
        .getElementById("packageWeight")
        .textContent =
        packageData.weight;


    document
        .getElementById("deliveryFee")
        .textContent =
        packageData.deliveryFee;


    document
        .getElementById("deliveryDate")
        .textContent =
        packageData.estimatedDelivery;



    /* =========================
       МЕСТОПОЛОЖЕНИЕ
    ========================== */

    document
        .getElementById("currentLocation")
        .textContent =
        packageData.currentLocation;


    document
        .getElementById("latestUpdate")
        .textContent =
        packageData.latestUpdate;



    /* =========================
       СТАТУС
    ========================== */

    document
        .getElementById("status")
        .textContent =
        packageData.status;



    /* =========================
       ПРОГРЕСС
    ========================== */

    document
        .getElementById("progressText")
        .textContent =
        packageData.progress + "%";


    document
        .getElementById("progressFill")
        .style.width =
        packageData.progress + "%";



    /* =========================
       КОНТАКТНЫЕ ССЫЛКИ
    ========================== */

    document
        .getElementById("zangiLink")
        .href =
        packageData.zangiLink;


    document
        .getElementById("telegramLink")
        .href =
        packageData.telegramLink;



    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =========================================
   ОТКРЫТЬ ВАРИАНТЫ СВЯЗИ
========================================= */

function openContactOptions() {

    document
        .getElementById("contactModal")
        .style.display = "flex";

}



/* =========================================
   ЗАКРЫТЬ ВАРИАНТЫ СВЯЗИ
========================================= */

function closeContactOptions() {

    document
        .getElementById("contactModal")
        .style.display = "none";

}



/* =========================================
   ЗАКРЫТЬ ПРИ НАЖАТИИ ВНЕ ОКНА
========================================= */

document
    .getElementById("contactModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeContactOptions();

            }

        }
    );



/* =========================================
   НАЗАД
========================================= */

function goBack() {

    document
        .getElementById("packageDetails")
        .style.display = "none";


    document
        .querySelector(".tracking-box")
        .style.display = "block";


    document
        .getElementById("trackingInput")
        .value = "";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
