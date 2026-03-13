import { initListenersHeader, chamaDropdown } from './ui/header.js';
initListenersHeader();

// Torna a função global para ser acessível no HTML
window.chamaDropdown = chamaDropdown;