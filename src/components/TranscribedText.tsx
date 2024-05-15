import FlexContainer from "../components/FlexContainer"

export default function TranscribedText({ textContent }: any) {
    return (
        <FlexContainer>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transcription</label>
            <textarea id="message" rows={10} cols={80} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly={true} value={textContent}></textarea>
        </FlexContainer>
    )
}
