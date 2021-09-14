namespace GoogleTranslateAPI {

  interface Result extends XMLHttpRequest {
    response: Response
  }

  interface Response {
    src: string
    confidence: number
    spell: {}
    dict?: Response.Dict[]
    ld_result: Response.LDResult
    sentences: Response.Sentence[]
  }

  namespace Response {
    interface LDResult {
      srclangs: string[]
      srclangs_confidences: number[]
      extended_srclangs: string[]
    }

    interface Sentence {
      trans: string
      orig: string
      backend: number
    }

    interface Dict {
      pos: string
      terms: string[]
    }
  }
}

interface FormattedResult {
  resultText?: string
  candidateText: string
  sourceLanguage: string
  percentage: number
  statusText: string
}
