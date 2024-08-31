import React, { PropsWithChildren, useState } from 'react'
import styled, { css } from 'styled-components'
import { MobileBreakPoint, TabletBreakPoint } from '../Utils/Consts'
import FadeInComponent from '../FadeInComponent'
import { Checkbox, Form, Input, Select } from 'antd'
import { MaskedInput } from 'antd-mask-input'
import { RedButton, RedButtonStyle } from '../PageBlocks'
import { useForm } from 'antd/es/form/Form'
import { MarginBootom180, MarginBottom24, MarginBottom45 } from '../Gaps'
import parse from 'html-react-parser'
import { isDesktop, isMobile } from 'react-device-detect'

const FormContainer = styled.div`
width: 45%;
display: flex;
flex-direction: column;
${MarginBootom180}

@media (max-width: ${TabletBreakPoint}){
    width: 85%;
}

@media (max-width: ${MobileBreakPoint}){
    width: 100%;
    margin-bottom: 0;
}
`

const miniText = css`
font-size: 1svw;
font-weight: 500;

@media (max-width: ${TabletBreakPoint}){

font-size: 1.8svw;
}

@media (max-width: ${MobileBreakPoint}){
font-size: 3.7svw;
}
`
const inputStyle = css`
    background-color: rgba(235, 235, 235, 0.2);
    height: 3.9svw;
    border: none;
    color: rgba(235, 235, 235, 0.4);
    ${miniText}

    &::placeholder{
        color: rgba(235, 235, 235, 0.4);
    }

    @media (max-width: ${TabletBreakPoint}){

        height: 7.8svw;
}

@media (max-width: ${MobileBreakPoint}){
    height: 14.4svw;
}
`
const FormInput = styled(Input)`
${inputStyle}
`

const CheckboxSpan = styled.span`
${miniText}
color: rgba(235, 235, 235, 1);
`

const FormHeader=styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
${MarginBottom45}
a{
    display: block;
    width: 50%;
    font-size: 1.8svw;
    text-transform: uppercase;
    font-weight: 600;
    user-select: none;
    color: #CC3327;

    @media (max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
        width: 100%;
    }

    @media (max-width: ${MobileBreakPoint}){
        font-size: 8.6svw;
        width: 100%;
    }
}

@media (max-width: ${TabletBreakPoint}){
    width: 85%;
}

@media (max-width: ${MobileBreakPoint}){
    width: 100%;
}

`
const PriceContainer = styled(FadeInComponent)`
    width: 94%;
    display: flex;
    flex-wrap: wrap;
    ${MarginBootom180}

    @media (max-width: ${TabletBreakPoint}){

        justify-content: center;
    }
    @media (max-width: ${MobileBreakPoint}){
        width: 88%;
        //justify-content: center;
    }
`


interface CourseFormProps {
    onFinish: (values: any) => void
}
const CourseForm = ({ onFinish }: CourseFormProps) => {
    const [form] = useForm()
    const [confirmChecked, setChecked]=useState(false)
    const inputStyles: React.CSSProperties = {
        color: 'rgba(235, 235, 235, 0.4)',
        backgroundColor: 'rgba(235, 235, 235, 0.2)',
        fontWeight: 500
    }

    return <FormContainer >
        <Form form={form}
            onFinish={onFinish}
        >
            <Form.Item
                name={'name'}
                rules={[{
                    required: true,
                    message: 'Укажите имя',
                },
                {
                    pattern: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                    message: 'Некорректное имя'
                }]}>
                <FormInput styles={{ input: inputStyles, affixWrapper: inputStyles }} placeholder='ИМЯ' />
            </Form.Item>
            <Form.Item
                name={'tel'}
                rules={[
                    {
                        required: true,
                        message: 'Укажите телефон'
                    },
                    {
                        //type: 'regexp',
                        pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                        message: 'Некорректный телефон'
                    }
                ]}>
                <FormInput styles={{ input: inputStyles }} placeholder='TEL' />
            </Form.Item>
            <Form.Item
                name={'mail'}
                rules={[{
                    required: true, message: 'Укажите почту'
                },
                {
                    type: 'email',
                    message: 'Некорректная почта'
                }]}>
                <FormInput styles={{ input: inputStyles }} placeholder='EMAIL' />
            </Form.Item>
            <Form.Item
                name={'confirm'}
                valuePropName="checked"
                rules={[{
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Требуется согласие на обработку данных')),
                }
                ]}>
                <Checkbox indeterminate={confirmChecked} onChange={()=>setChecked(!confirmChecked)}><CheckboxSpan>я соглашаюсь на обработку данных</CheckboxSpan></Checkbox>
            </Form.Item>
        </Form>
        <RedButton style={{ alignSelf: 'center', marginTop: '2svw' }} hover onClick={() => form.submit()}>Оставить заявку</RedButton>
    </FormContainer>
}

interface price {
    title: string,
    price: number,
    installment: boolean,
    description?: string[]
}

const TariffContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
${MarginBootom180}
@media (max-width: ${TabletBreakPoint}){
    width: 75%;
    align-self: center;
    justify-content: flex-start;
}

@media (max-width: ${MobileBreakPoint}){
    width: 100%;
    justify-content: flex-start;
}
`

const TariffButtons = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`
const TariffButton = styled.div<{ hover: boolean }>`
${RedButtonStyle}
color: ${({ hover }) => hover ? 'rgba(22, 21, 21, 1)' : 'rgba(204, 51, 39, 1)'};
margin-right: 2svw;
margin-bottom: 2svw;

@media(max-width: ${MobileBreakPoint}){
        font-size: 3.8svw;
        padding-top: 2svw;
        padding-bottom: 2svw;
        padding-right: 5svw;
        padding-left: 5svw;
        margin-right: 5svw;
        margin-bottom: 5svw;
    }
`

const TariffPriceElement = styled.a`
font-size: 7.7svw;
font-weight: 700;
color: #CC3327;
text-transform: uppercase;
margin: 0;
@media (max-width: ${TabletBreakPoint}){
        font-size: 15.4svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 15.4svw;
    }

span{
        font-size: 1.8svw;

        @media (max-width: ${TabletBreakPoint}){
            font-size: 3.7svw
        }

        @media (max-width: ${MobileBreakPoint}){
            font-size: 4.3svw;
        }
}
`
const TarrifDescription = styled.div`

    display: flex;
    
    a{
        display: block;
        text-transform: uppercase;
        ${miniText}
        color: #CC3327; 
        font-weight: 600;
        margin-right: 2svw;
    }

    @media (max-width: ${MobileBreakPoint}){
        flex-direction: column;
    }
`
interface PriceBlockProps {
    priceList: price[]
}
//элемент с цифрами
const TariffPrice = ({ tariff }: PropsWithChildren<{ tariff: price }>) => {

    const measure = tariff.installment ? '₽/<span>мес</span>' : '₽'
    return <><TariffPriceElement>
        {tariff.price}
        {parse(measure)}
    </TariffPriceElement>
    {tariff.description && <TarrifDescription>
        {
            tariff.description.map((line)=><a>{line}</a>)
        }
    </TarrifDescription>}
    </>
}
//левая половина блока с кнопками и суммами
const Tariffs = ({priceList}: PriceBlockProps) => {

    const [selectedTariff, setSelectedTariff] = useState(priceList[0].title)

    const onClickHandler = (item: string) => {
        setSelectedTariff(item)
    }

    const getSelectedItem = () => {
        const index = priceList.findIndex((elem) => elem.title === selectedTariff);
        return priceList[index];
    }
    return <TariffContainer>
        <TariffButtons>
            {
                priceList.map((elem) => <TariffButton
                    onClick={() => onClickHandler(elem.title)}
                    hover={selectedTariff === elem.title}>{elem.title}</TariffButton>)
            }
        </TariffButtons>
        <TariffPrice tariff={getSelectedItem()} />
    </TariffContainer>
}

function PriceBlock({priceList}: PriceBlockProps) {


    const onFinishHandle = (values: any) => {
        alert('Типа успешная отправка формы')
        values.tarriff = 'тариф'
        console.log(values)
    }
    return (
        <PriceContainer type='div' threshold={0.1}>
            {isDesktop && <FormHeader><a>заполните контактные данные:</a></FormHeader>}
            <Tariffs priceList={priceList}/>
            {isMobile && <FormHeader><a>заполните контактные данные:</a></FormHeader>}
            <CourseForm onFinish={onFinishHandle} />
        </PriceContainer>
    )
}

export default PriceBlock