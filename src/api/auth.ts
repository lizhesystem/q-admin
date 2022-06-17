import axios from "http/axios";
import md5 from "js-md5";

export const info = (domain: string) => {
	return axios.get("/blade-system/tenant/info", {
		domain
	});
};
interface LoginResult {
	name: string;
}
/**
 * 登录
 * @param data {username password}
 */
export const Login = (username: string, password: string, type: string, key: string, code: string) => {
	return axios.post<LoginResult>(
		"/blade-auth/oauth/token",
		{
			tenantId: "000000",
			username,
			password: md5(password),
			grant_type: "captcha",
			scope: "all",
			type
		},
		{
			headers: {
				"Tenant-Id": "000000",
				"Dept-Id": "",
				"Role-Id": "",
				"Captcha-Key": key,
				"Captcha-Code": code
			}
		}
	);
};
export const getExcel = (params: any) => {
	return axios.request<never, any>({
		url: `/lecent-mall/report/export`,
		responseType: "arraybuffer",
		method: "get",
		params
	});
};

/**
 * 登录图片验证码
 * @returns
 */
interface ImageCode {
	key: string;
	image: string;
}
// * 无 ResultData 包裹
export const GetCaptcha = () => axios.get<never, ImageCode>("/blade-auth/oauth/captcha");
// * 有 ResultData 包裹
export const GetCaptcha1 = () =>
	axios.request<ImageCode>({
		url: "/blade-auth/oauth/captcha?111"
	});

/**
 * 退出登录
 * @returns
 */
export const Logout = () => axios.get("/blade-auth/oauth/logout");

/**
 * 刷新token
 * @param refresh_token
 * @param tenantId
 * @returns
 */
export const RefreshToken = (refresh_token: string) =>
	axios.post(
		"/blade-auth/oauth/token",
		{
			tenantId: "000000",
			refresh_token,
			grant_type: "refresh_token",
			scope: "all"
		},
		{
			headers: {
				"Tenant-Id": "000000"
			}
		}
	);
