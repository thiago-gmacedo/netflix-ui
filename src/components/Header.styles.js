import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
${tw`
  flex
  place-content-between
  p-0
  fixed
  top-0
  w-full
  transition-all
  z-10
`}

${(props) => (props.dark ? tw`bg-black` : tw`bg-transparent`)}

img {
  ${tw`
    h-8
    mr-5
    ml-5
    mt-5
  `}
}
`;
