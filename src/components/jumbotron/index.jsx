import { Item, Inner, Container, Title, SubTitle, Image, Pane }
    from './styles/jumbotron'


export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}
Jumbotron.SubTitle = function JumboTronSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}
Jumbotron.Image = function JumboTronImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}
Jumbotron.Pane = function JumboTronPane({ children }) {
    return (
        <Pane>{children}</Pane>
    )
}