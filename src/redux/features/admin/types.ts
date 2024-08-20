export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
};

export type TAcademicManagementResponse = {
  data?: any;
  error: TError;
};
