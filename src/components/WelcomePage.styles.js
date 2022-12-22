import styled from "@emotion/styled";

export const WelcomeContainer = styled.div`;

width: 100vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;


background-color: black;
background: linear-gradient(to bottom, #011640, #203F59,#8C7472);
`

export const WelcomeCenterBox = styled.div`
width: 40%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: top;

padding: 1rem;

color: #F2F2F2;
border: 2px solid #F2F2F2;
border-radius: 1rem;
background-color: transparent;


& h1{
    font-size: 3rem;
}

& p{
    line-height: 24px;
    font-size:15px;
    margin: 0;
}

`
export const RouteGenerateButton = styled.div`

position: relative;
display: inline-block;
margin-right:3em;
padding: 0.2rem 1rem;
margin: 1.5rem;

font-weight: 500;
font-size: 15px;
line-height: 25px;
text-decoration: none;
// text-transform: uppercase;
vertical-align: middle;
overflow: hidden;

cursor: pointer;

border: 1px solid #011640;
border-radius:1rem;

&:hover {
    opacity: 0.7;
}

&:hover:after{
    left: 120%;

}

&span{
    z-index:2;
}

&:after{
    content: "";
	height: 155px;
	left: -75px;
	opacity: .2;
	position: absolute;
	top: -50px;
	background: #fff;
	-webkit-transform: rotate(35deg);
	transform: rotate(35deg);
	-webkit-transition: all .55s cubic-bezier(0.19, 1, 0.22, 1);
	transition: all .55s cubic-bezier(0.19, 1, 0.22, 1);
	width: 50px;
	z-index: -1;
}
`

export const WelcomeBoxFooter = styled.div`
font-family: 'La Belle Aurore', cursive;
font-size: 15px;

`