import { initListenersHeader, chamaDropdown } from './ui/header.js';
import { carregarFragments } from './ui/fragments.js';

initListenersHeader();

window.chamaDropdown = chamaDropdown;
window.addEventListener('DOMContentLoaded', carregarFragments);


