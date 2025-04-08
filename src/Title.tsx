// @flow


type TitleTypes = {
    title: string
};

export const Title = (props: TitleTypes) => {
    return <h1>{props.title}</h1>
};