import {SgnwSymbol} from '../../../dist/collection/components/sgnw-symbol/sgnw-symbol';
import docs from './sgnw-symbol.docs.mdx';
import { action } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

export default {
  title: 'sgnw-components/Component/sgnw-symbol',
  component: SgnwSymbol,
  parameters: { 
    docs: { page: docs },
    actions: { disabled: true }
  }
};

export const fsw = () => {
  const fsw = 'S10000'  ;
  return (
    <sgnw-symbol 
      fsw={fsw}
      onClick={action('clicked')}
    ></sgnw-symbol>
  );
}
fsw.story = {
  parameters: { 
    actions: { disabled: false }
  }
};

export const swu = () => <sgnw-symbol swu="񄵡"></sgnw-symbol>;

export const iswa = () => <sgnw-symbol iid="1"></sgnw-symbol>;
