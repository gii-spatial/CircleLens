export type ResponseData<T = undefined> = T extends undefined
  ? { success: true; message?: string } | { success: false; error: string }
  :
      | { success: true; data: T; message?: string }
      | { success: false; error: string };
