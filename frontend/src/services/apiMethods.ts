import api from "./api";

// 获取所有职位
export const getJobs = async () => {
  return await api.get("/jobs");
};

// 获取单个职位详情
export const getJobDetail = async (jobId: number) => {
  return await api.get(`/jobs/${jobId}`);
};

// 提交职位申请
export const applyJob = async (jobId: number, coverLetter: string) => {
  return await api.post(`/jobs/${jobId}/apply`, { coverLetter });
};

// 获取用户信息
export const getUserProfile = async () => {
  return await api.get("/user");
};
