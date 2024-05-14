import FlexContainer from "../components/FlexContainer"

export default function TranscribedText({ textContent }) {
    return (
        <FlexContainer>
            <p>Transcribed text:</p>
            <p>{textContent}</p>
        </FlexContainer>
    )
}
