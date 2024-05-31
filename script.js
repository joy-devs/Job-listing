  
  function renderJobs(jobs) {
      const jobListings = document.getElementById('job-listings');
      jobs.forEach(job => {
          const jobElement = document.createElement('div');
          jobElement.className = 'job';


          
          const jobHeader = document.createElement('div');
          jobHeader.className = 'job-header';
          
          const logo = document.createElement('img');
          logo.src = job.logo;
          logo.alt = job.company;
          jobHeader.appendChild(logo);
          
          const jobTitle = document.createElement('div');
          jobTitle.className = 'job-title';
          
          const title = document.createElement('h3');
          title.textContent = job.position;
          jobTitle.appendChild(title);
          
          if (job.new) {
              const newBadge = document.createElement('span');
              newBadge.className = 'badge new';
              newBadge.textContent = 'NEW!';
              jobTitle.appendChild(newBadge);
          }
          
          if (job.featured) {
              const featuredBadge = document.createElement('span');
              featuredBadge.className = 'badge featured';
              featuredBadge.textContent = 'FEATURED';
              jobTitle.appendChild(featuredBadge);
          }
          
          jobHeader.appendChild(jobTitle);
          jobElement.appendChild(jobHeader);
          
          const jobDetails = document.createElement('div');
          jobDetails.className = 'job-details';
          
          const postedAt = document.createElement('span');
          postedAt.textContent = job.postedAt;
          jobDetails.appendChild(postedAt);
          
          const contract = document.createElement('span');
          contract.textContent = job.contract;
          jobDetails.appendChild(contract);
          
          const location = document.createElement('span');
          location.textContent = job.location;
          jobDetails.appendChild(location);
          
          jobElement.appendChild(jobDetails);
          
          const jobTags = document.createElement('div');
          jobTags.className = 'job-tags';
          
          const roleTag = document.createElement('span');
          roleTag.textContent = job.role;
          jobTags.appendChild(roleTag);
          
          const levelTag = document.createElement('span');
          levelTag.textContent = job.level;
          jobTags.appendChild(levelTag);
          
          job.languages.forEach(language => {
              const langTag = document.createElement('span');
              langTag.textContent = language;
              jobTags.appendChild(langTag);
          });
          
          job.tools.forEach(tool => {
              const toolTag = document.createElement('span');
              toolTag.textContent = tool;
              jobTags.appendChild(toolTag);
          });
          
          jobElement.appendChild(jobTags);
          jobListings.appendChild(jobElement);
      });
  }

  fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                renderJobs(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
            document.addEventListener('DOMContentLoaded', () => {
                fetch('data.json')
                    .then(response => response.json())
                    .then(data => renderJobs(data))
                    .catch(error => console.error('Error fetching data:', error));
            });
  