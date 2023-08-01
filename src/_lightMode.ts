export function lightMode() {
  const lightBright = document.querySelector<HTMLElement>(`.light__bright`);

  const lightDark = document.querySelector<HTMLElement>(`.light__dark`);

  const everything = document.querySelector<HTMLElement>(`body`);

  if (!lightBright || !lightDark || !everything) {
    throw new Error(`issue with a query selector`);
  }
  lightBright.addEventListener(`click`, () => {
    everything.classList.add(`light-mode`);
    everything.classList.remove(`dark-mode`);
  });

  lightDark.addEventListener(`click`, () => {
    everything.classList.add(`dark-mode`);
    everything.classList.remove(`light-mode`);
  });
}
