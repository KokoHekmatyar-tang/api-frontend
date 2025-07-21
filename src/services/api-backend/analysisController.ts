// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listTopInvokeInterfaceInfo GET /api/analysis/tpo/interface/invoke */
export async function listTopInvokeInterfaceInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO_>('/api/analysis/tpo/interface/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}
