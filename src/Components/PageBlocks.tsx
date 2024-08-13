import styled from "styled-components";


export const PageContainer = styled.div`
width: 100%;
background-color: #161515;
overflow-y: auto;
overflow-x: hidden;
`
//Самый верхний блок страницы на всю ширину и высоту экрана
export const PageTopBlock = styled.div`
width: 100%;
height: 100svh;
position: relative;

@media(max-width: 600px){
    height: 30svh;
}
`

export const PageContent = styled.div`
width: 100%;
height: 1000px;
`

const PageHeaderContainer=styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 95%;
`

interface PageHeaderProps{
    header: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string;
    }>
}
export const PageHeader=({header} : PageHeaderProps)=>{

    const Header=header as  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    return(
        <PageHeaderContainer>
            <Header width="100%"/>
        </PageHeaderContainer>
    )
}

export const PageSmallHeader=styled.h2`
width: 46svw;
    font-size: 3.3svw;
    color: white;
    position: absolute;
top: 63.6%;
left: 50%;
transform: translate(-50%);
`