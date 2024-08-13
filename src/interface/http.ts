

interface IRequest {
  message: Data | Data[];
}




interface IReply {
  200: { success: boolean };
  302: { url: string };
  500: { serverError: string };
  '4xx': { error: string };

}

export {IRequest, IReply};
