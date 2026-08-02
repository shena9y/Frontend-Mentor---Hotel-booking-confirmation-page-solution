// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const guestNav = document.getElementById("guestNav");
const sidebar = document.querySelector(".sidebar");
const sidebarBottom = document.querySelector(".sidebar-bottom");

if (menuToggle && guestNav && sidebar && sidebarBottom) {
  menuToggle.addEventListener("click", () => {
    const isOpen = guestNav.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    sidebarBottom.classList.toggle("open", isOpen);
    sidebar.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  });
}

// ===== Copy Wi-Fi Password =====
const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const password = "soleil-2026";
    try {
      await navigator.clipboard.writeText(password);
      copyBtn.classList.add("copied");

      setTimeout(() => {
        copyBtn.classList.remove("copied");

        Copy;
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = password;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      copyBtn.classList.add("copied");
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.textContent = "Copy";
      }, 2000);
    }
  });
}

// ===== Print Receipt =====
const printBtn = document.getElementById("printBtn");

if (printBtn) {
  printBtn.addEventListener("click", () => {
    window.print();
  });
}

// ===== Add to Calendar =====
const calendarBtn = document.getElementById("calendarBtn");

if (calendarBtn) {
  calendarBtn.addEventListener("click", () => {
    // Booking details
    const title = "Maison Soleil - La Garrigue";
    const startDate = "20260425T150000";
    const endDate = "20260429T110000";
    const location = "12 Rue des Oliviers, Cassis";
    const description =
      "4 nights at Maison Soleil. Room: La Garrigue. Breakfast included for 2 guests.";

    // Create .ics file content
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Maison Soleil//Booking//EN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@maison-soleil`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${title}`,
      `LOCATION:${location}`,
      `DESCRIPTION:${description}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    // Create and download the .ics file
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "maison-soleil-booking.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

// ===== Receipt Card Animation =====
const receiptCard = document.querySelector(".receipt-card");
const hostNoteCard = document.querySelector(".host-note-card");
const bookingCards = document.querySelector(".booking-cards");

function toggleCardRotation() {
  bookingCards.addEventListener("click", () => {
    receiptCard.classList.toggle("unrotate-receipt");
    hostNoteCard.classList.toggle("unrotate-host");
  });
}
toggleCardRotation();
