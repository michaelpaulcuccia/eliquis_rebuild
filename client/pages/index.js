import Head from 'next/head';
import styled from 'styled-components';
import Container from '../layout/Container';
import Flex from '@/utils/grid/Flex';
import StackedIconButton from '@/components/StackedIconButton';
import { breakpoints } from '@/utils/constants/screens';
const AfiB = '/icons/AFB.svg';
const Ortho = '/icons/ORTHO.svg';
const Vte = '/icons/VTE.svg';

const data = [
  {
    icon: AfiB,
    highlightText: <>Reduce the Risk of Stroke Due to Nonvalvular Atrial Fibrillation (AFib)</>,
    buttonText: "ELIQUIS & NONVAVULAR AFIB",
    footerText: "For patients with AFib, a type of irregular heartbeat, not caused by a heart valve problem"
  },
  {
    icon: Ortho,
    highlightText: <>Treat Blood Clots In the Veins of the Legs/Lungs & Reduce Risk of it Occuring again</>,
    buttonText: "ELIQUIS & DVT/PE",
    footerText: "For patients with deep vein thrombosis (DVT) or pulmonary embolism (PE)"
  },
  {
    icon: Vte,
    highlightText: <>Decrease Risk of DVT Blood Clots After Hip or Knee Replacement Surgery</>,
    buttonText: "ELIQUIS & HIP/KNEE REPLACEMENT",
    footerText: "For patients who have had hip surgery or knee replacement surgery"
  }
]

const StyledStackedIconButton = styled(StackedIconButton)`
`;

const StyledFlex = styled(Flex)`

  @media(max-width: ${breakpoints.rowOfThreeBreak}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Eliquis Rebuild</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <StyledFlex
          justify='space-between'
        >
            {
              data.map((item, i) => (
                <StyledStackedIconButton
                  highlightText={item.highlightText}
                  buttonText={item.buttonText}
                  footerText={item.footerText}
                  icon={item.icon}
                  key={i}
                />
              ))
            }
        </StyledFlex>
    </>
  )
}