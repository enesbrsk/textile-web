import axios from "axios";

const username = "enesbrsk";
const token = "x";
const headers = { Authorization: `token ${token}` };
const url = `https://api.github.com/users/${username}/repos`;

export default {
    getProjects() {
        return axios.get(url, { headers }).then(response => {
            return Promise.all(
                response.data.map(project => {
                    return axios
                        .get(project.languages_url, { headers })
                        .then(response => {
                            const languages = Object.keys(response.data);
                            const projectInfo = {
                                name: project.name,
                                cloneUrl: project.clone_url,
                                createdAt: project.created_at,
                                languages: languages
                            };
                            return projectInfo;
                        })
                        .catch(error => console.error(error));
                })
            );
        });
    }
};
