import {SgnwSymbol} from '../../../dist/collection/components/sgnw-symbol/sgnw-symbol';
import docs from './sgnw-symbol.docs.mdx';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

export default {
  title: 'sgnw-components|Component/sgnw-symbol',
  component: SgnwSymbol,
  parameters: { 
    docs: { page: docs },
    knobs: { disabled: true },
    actions: { disabled: true }
  },
  decorators: [withKnobs]
};

export const fsw = () => {
  const fsw = text('fsw','S10000');
  return (
    <sgnw-symbol 
      fsw={fsw}
      onClick={action('clicked')}
    ></sgnw-symbol>
  );
}
fsw.story = {
  parameters: { 
    knobs: { disabled: false },
    actions: { disabled: false }
  }
};

export const swu = () => <sgnw-symbol swu="񄵡"></sgnw-symbol>;

export const iswa = () => <sgnw-symbol iid="1"></sgnw-symbol>;
