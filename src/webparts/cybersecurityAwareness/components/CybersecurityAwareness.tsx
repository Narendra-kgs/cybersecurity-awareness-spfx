import * as React from 'react';
import { useEffect } from 'react';
import styles from './CybersecurityAwareness.module.scss';
import { pageMarkup, pageStyles } from './pageContentOriginal';

const CybersecurityAwareness: React.FC = () => {

  useEffect(() => {

    const weekBtns =
      document.querySelectorAll('.week-btn');

    const setActiveWeek = (week: string) => {

      const week1 =
        document.getElementById('week1') as HTMLElement;

      const week2 =
        document.getElementById('week2') as HTMLElement;

      if (!week1 || !week2) {
        return;
      }

      // -----------------------------
      // WEEK CONTENT
      // -----------------------------

      if (week === '1') {
        week1.style.display = 'block';
        week2.style.display = 'none';
      }

      if (week === '2') {
        week1.style.display = 'none';
        week2.style.display = 'block';
      }


      // -----------------------------
      // TIMELINE RED DOT
      // -----------------------------

      document
        .querySelectorAll('.week-nav-item')
        .forEach(item => {
          item.classList.remove('now');
        });

      const selectedButton =
        document.querySelector(
          `.week-btn[data-week="${week}"]`
        );

      selectedButton
        ?.closest('.week-nav-item')
        ?.classList.add('now');


      // -----------------------------
      // THEME CARD RED TOP BORDER
      // -----------------------------

      document
        .querySelectorAll('.week-theme')
        .forEach(card => {
          card.classList.remove('now');
        });

      const selectedTheme =
        document.querySelector(
          `.week-theme[data-theme-week="${week}"]`
        );

      selectedTheme?.classList.add('now');
    };


    // -----------------------------
    // BUTTON CLICK EVENTS
    // -----------------------------

    weekBtns.forEach((btn) => {

      btn.addEventListener('click', () => {

        const week =
          btn.getAttribute('data-week');

        if (!week) {
          return;
        }

        setActiveWeek(week);

      });

    });


    // -----------------------------
    // DEFAULT = WEEK 2
    // -----------------------------

    setActiveWeek('2');

  }, []);


  return (
    <div className={styles.webPartRoot}>
      <style>{pageStyles}</style>

      <div
        dangerouslySetInnerHTML={{
          __html: pageMarkup
        }}
      />
    </div>
  );
};

export default CybersecurityAwareness;