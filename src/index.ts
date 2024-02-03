import * as styles from './styles';
import * as search from './search';
import * as state from './state';
import * as copy from './copy';
import * as download from './export';
import * as logo from './logo';

export type elements = {
	instances: HTMLDivElement;
	sidebar: HTMLDivElement;
	items: HTMLDivElement;
	getItems: () => HTMLDivElement[];
	instruction: HTMLDivElement;
	sidebarControls: HTMLDivElement;
	sort: HTMLDivElement;
	sideControls: HTMLDivElement;
	logo: HTMLImageElement;
};

window.addEventListener(
	'load',
	async () => {
		const elements: elements = {
			instances: document.querySelector('.instances') as HTMLDivElement,
			sidebar: document.querySelector('.sidebar') as HTMLDivElement,
			items: document.querySelector('.items') as HTMLDivElement,
			getItems: () => {
				return Array.from(document.querySelectorAll('.items div.item'));
			},
			instruction: document.querySelector('.instruction') as HTMLDivElement,
			sidebarControls: document.querySelector('.sidebar-controls') as HTMLDivElement,
			sort: document.querySelector('.sort') as HTMLDivElement,
			sideControls: document.querySelector('.side-controls') as HTMLDivElement,
			logo: document.querySelector('.logo') as HTMLImageElement,
		};

		styles.init();
		search.init(elements);
		await state.init(elements);
		copy.init(elements);
		download.init(elements);
		logo.init(elements);
	},
	false,
);
