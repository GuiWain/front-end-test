import * as S from './styles'

const GetServices = () => (
  <S.Wrapper>
    <S.H4>At lectus urna duis convallis</S.H4>
    <S.DivSteps>
      <S.DivStep>
        <S.Number modifier="light">01.</S.Number>
        <S.Step>Lorem ipsum dolor</S.Step>
        <S.Description>
          Excepteur sint occaecat cupidatat non proident.
        </S.Description>
      </S.DivStep>
      <S.DivStep>
        <S.Number modifier="medium">02.</S.Number>
        <S.Step>Cursus in hac habitasse platea dictumst.</S.Step>
        <S.Description>
          Excepteur sint occaecat cupidatat non proident.
        </S.Description>
      </S.DivStep>
      <S.DivStep>
        <S.Number modifier="semiBold">03.</S.Number>
        <S.Step>Non blandit massa</S.Step>
        <S.Description>
          Excepteur sint occaecat cupidatat non proident.
        </S.Description>
      </S.DivStep>
      <S.DivStep>
        <S.Number modifier="bold">04.</S.Number>
        <S.Step>Aliquet lectus proin nibh nisl</S.Step>
        <S.Description>
          Excepteur sint occaecat cupidatat non proident.
        </S.Description>
      </S.DivStep>
    </S.DivSteps>
  </S.Wrapper>
)

export default GetServices
