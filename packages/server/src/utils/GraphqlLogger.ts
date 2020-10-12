import { print } from 'graphql';

export class BasicLogging {
  requestDidStart({ queryString, parsedQuery, variables }: any) {
    const query = queryString || print(parsedQuery);
    console.log(query);
    console.log(variables);
  }

  willSendResponse({ graphqlResponse }: any) {
    console.log(JSON.stringify(graphqlResponse, null, 2));
  }
}
