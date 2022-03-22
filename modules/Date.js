const date = () => {
  window.addEventListener('load', () => {
    /* eslint-disable-next-line no-undef */
    const { DateTime } = luxon;
    const now = DateTime.now();
    document.querySelector('.date').innerText = now.toLocaleString(
      DateTime.DATETIME_MED,
    );
  });
};

export default date;
