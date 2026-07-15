declare module '@apiverve/randomquote' {
  export interface randomquoteOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface randomquoteResponse {
    status: string;
    error: string | null;
    data: RandomQuoteData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface RandomQuoteData {
      quote:  null | string;
      author: null | string;
  }

  export default class randomquoteWrapper {
    constructor(options: randomquoteOptions);

    execute(callback: (error: any, data: randomquoteResponse | null) => void): Promise<randomquoteResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randomquoteResponse | null) => void): Promise<randomquoteResponse>;
    execute(query?: Record<string, any>): Promise<randomquoteResponse>;
  }
}
