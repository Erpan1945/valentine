window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you wanna play music in the background?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.music').play(); 
        }

        // Tampilkan container dengan efek transisi
        const container = document.querySelector('.container');
        container.style.display = 'block';
        setTimeout(() => {
            container.style.opacity = '1';
        }, 50);
    });

    // Tambahkan event listener untuk tombol "No"
    const noButton = document.querySelector('.no-button');
    if (noButton) {
        noButton.addEventListener('click', handleNoClick);
    } else {
        console.error("Tombol 'No' tidak ditemukan!");
    }

    // Tambahkan event listener untuk tombol "Yes"
    const yesButton = document.querySelector('.yes-button');
    if (yesButton) {
        yesButton.addEventListener('click', showYesPage);
    } else {
        console.error("Tombol 'Yes' tidak ditemukan!");
    }
});

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (!noButton || !yesButton) {
        console.error("Tombol 'No' atau 'Yes' tidak ditemukan!");
        return;
    }

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function showYesPage() {
    const valentinePage = document.getElementById("valentinePage");
    const yesPage = document.getElementById("yesPage");

    if (!valentinePage || !yesPage) {
        console.error("Halaman 'valentinePage' atau 'yesPage' tidak ditemukan!");
        return;
    }

    valentinePage.style.opacity = "0"; // Hilangkan dengan transisi
    setTimeout(() => {
        valentinePage.style.display = "none"; // Sembunyikan setelah transisi selesai
        yesPage.style.display = "block";
        setTimeout(() => {
            yesPage.style.opacity = "1";
        }, 10);
    }, 500);
}

function restart() {
    const valentinePage = document.getElementById("valentinePage");
    const yesPage = document.getElementById("yesPage");
    const yesButton = document.querySelector(".yes-button");
    const noButton = document.querySelector(".no-button");

    if (!valentinePage || !yesPage || !yesButton || !noButton) {
        console.error("Elemen halaman atau tombol tidak ditemukan!");
        return;
    }

    valentinePage.style.display = "block";
    yesPage.style.display = "none";

    yesButton.style.fontSize = "1.5em";
    noButton.textContent = "No";
    messageIndex = 0;
}

function redirectToWhatsApp() {
    window.location.href = "https://wa.me/+6285733570608";
}
