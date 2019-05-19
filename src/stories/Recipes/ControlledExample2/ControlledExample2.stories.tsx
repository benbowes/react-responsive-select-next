import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { IOption } from '../../../ReactResponsiveSelect';
import { withStoryBookInfo } from '../../../utils/withStoryBookInfo';
import { Form } from './Form';
import { BRANDS, COLOURS, MODELS, TColoursOption, TModelsOption } from './mockProps';

import './Controlled.css';

interface IState {
    selectedBrand: string;
    selectedModel: string;
    selectedColour: string;
    brands: IOption[];
    models: IOption[];
    colours: IOption[];
    functions: {
        handleChangeBrand: (newValue: IOption) => void;
        handleChangeModel: (newValue: IOption) => void;
        handleChangeColour: (newValue: IOption) => void;
        handleSubmit: (event: any) => void;
    };
}

class ControlledExampleApp extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedBrand: 'null',
            selectedModel: 'null',
            selectedColour: 'null',
            brands: BRANDS,
            models: MODELS,
            colours: COLOURS,
            functions: {
                handleChangeBrand: this.handleChangeBrand,
                handleChangeModel: this.handleChangeModel,
                handleChangeColour: this.handleChangeColour,
                handleSubmit: this.handleSubmit,
            },
        };
    }

    public handleChangeBrand = (newValue: IOption): void => {
        const models = MODELS.filter((option: TModelsOption & { brand: string }) =>
            option.brand === newValue.value || option.value === 'null',
        );

        const colours = COLOURS.filter((option: TColoursOption) =>
                option.brands.some((brand: string) => brand === newValue.value) ||
                option.value === 'null',
        );

        this.setState({
            selectedBrand: newValue.value,
            selectedModel: 'null',
            selectedColour: 'null',
            models,
            colours,
        });
    }

    public handleChangeModel = (newValue: IOption): void => {
        const selectedBrand = MODELS.find((model: TModelsOption) =>
            model.value === newValue.value,
        ).brand;

        const colours = COLOURS.filter((option: TColoursOption) =>
            option.brands.some((brand: string) => brand === selectedBrand) ||
            option.value === 'null',
        );

        this.setState({
            selectedModel: newValue.value,
            colours,
        });
    }

    public handleChangeColour = (newValue: IOption): void => {
        this.setState({
            selectedColour: newValue.value,
        });
    }

    public handleSubmit = (event: any): void => {
        console.log('handleSubmit()', this.state, event);
    }

    public render(): React.ReactElement {
        return <Form {...this.state} />;
    }
}

const stories = storiesOf('Recipes', module);

stories.add(
    'Controlled example 2',
    withStoryBookInfo()(() => (
        <ControlledExampleApp />
    )),
);
