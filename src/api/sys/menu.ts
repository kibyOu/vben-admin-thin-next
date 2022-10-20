import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from './model/menuModel';
import { useUserStore } from '/@/store/modules/user';

/**
 * @description: Get user menu based on id
 */

export const getMenuList = (params: any) => {
  const userStore = useUserStore();
  return defHttp.get<getMenuListResultModel>(
    {
      url: `/iam/tcl/v1/${userStore.organizationId}/menus/tree`,
      params,
    },
    { isTransformResponse: false, joinTime: false },
  );
};
