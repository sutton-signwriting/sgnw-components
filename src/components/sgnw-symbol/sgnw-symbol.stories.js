import readme from './readme.md';

export default {
  title: 'The Symbol Component',
  component: 'sgnw-symbol',
  parameters: {
    notes: readme,
    info: {inline: true}
  },
};

export const Default = () => `
  <sgnw-symbol>S10000</sgnw-symbol>
`;
export const ISWA_ID = () => `
  <sgnw-symbol>1</sgnw-symbol>
`;

export const FSW = () => `
  <sgnw-symbol fsw="S20500"></sgnw-symbol>
`;