import {SgnwSymbol} from '../../../dist/collection/components/sgnw-symbol/sgnw-symbol';
import docs from './sgnw-symbol.docs.mdx';

export default {
  title: 'sgnw-components|Component/sgnw-symbol',
  component: SgnwSymbol,
  parameters: { docs: { page: docs } },
  excludeStories: /.*(Data|Fn)$/
};

export const basic = () => `
  <sgnw-symbol>S10000</sgnw-symbol>
`;
export const iswa = () => `
  <sgnw-symbol>1</sgnw-symbol>
`;

export const fsw = () => `
  <sgnw-symbol fsw="S20500"></sgnw-symbol>
`;