/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins'"
      },
      colors: {
        btn: '#37C9EF',
        label: '#909090',
        optBg: '#F7F7F7',
        bor: '#D6D6D6',
        qBor: '#D2D2D2',
        specialBtn: '#E9E6E6',
        special: '#565656',
        landingBg: '#0C41A7',
        label: '#F87D3F',
        title: '#E453AA',
        title1: '#6BCEFF',
        inputBg: 'rgba(255, 255, 255, 0.1)',
        faq: 'rgba(247, 115, 71, 0.2)',
        section2: '#ECF6FA',
        pup: '#262B40',
        grey: '#939499',
        arrBlue: '#6BCEFF',
        bor: '#DDDDDD',
        logo: '#909090',
        footer: '#F7F9FC',
        'footer-label': '#F7446F',
        border: '#0313a8',
        search: '#EAEAEA',
        searchLabel: '#545454',
        searchLogo: '#939499',
        category: '#EFFAFF',
        divide: '#D9D9D9',
        digiForm: '#EDF0FF',
        digital: '#FF544E',
        track: '#EFEFEF',
        track_bg: '#F5F5F5',
        delivered: '#0BA84A',
        delivered1: '#2ED573',
        issues: '#C7152A',
        issues1: '#F02532',
        orderTitle: '#999999',
        blank: '#E3E1E7',
        cancel: '#EA5B5B',
        blue1: '#0C41A7'
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')]
};
