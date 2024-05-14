import FlexContainer from "../components/FlexContainer"

export default function TranscribedText({ textContent }: any) {
    return (
        <FlexContainer>
            <p>Transcribed text:</p>
            <p>{textContent}</p>
        </FlexContainer>
    )
}
