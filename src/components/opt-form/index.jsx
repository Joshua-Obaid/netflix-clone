import { Container, Input, Button, Text, Break } from './styles/optForm'


export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function optFormInput({ children, ...restProps }) {
    return <Input {...restProps} />
}
OptForm.Button = function optFormButton({ children, ...restProps }) {
    return <Button {...restProps}>
        {children} <img src='/images/icons/chevron-right.png' /></Button>
}
OptForm.Text = function optFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
OptForm.Break = function optFormBreak({ ...restProps }) {
    return <Break {...restProps} />
}