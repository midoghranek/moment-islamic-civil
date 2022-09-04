import moment from 'moment';

declare module '@ghranek/moment-islamic-civil' {
    export default function momentIslamicCivil(
        input?: moment.MomentInput,
        format?: moment.MomentFormatSpecification,
        language?: string,
        strict?: boolean
    ): moment.Moment;
}