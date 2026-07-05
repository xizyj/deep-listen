export interface DownloadResource {
  title: string;
  category: string;
  date: string;
  downloadCount: number;
  fileSize: string;
  description: string;
}

export interface TutorialResource {
  title: string;
  category: string;
  date: string;
  viewCount: number;
  duration: string;
  description: string;
}

export interface CaseStudyResource {
  title: string;
  category: string;
  date: string;
  viewCount: number;
  description: string;
}

export type ResourceTab = 'documents' | 'software' | 'tutorials' | 'caseStudies';

export interface Resources {
  documents: DownloadResource[];
  software: DownloadResource[];
  tutorials: TutorialResource[];
  caseStudies: CaseStudyResource[];
}

export type ResourceItem = DownloadResource | TutorialResource | CaseStudyResource;

export function isDownloadResource(resource: ResourceItem): resource is DownloadResource {
  return 'downloadCount' in resource && 'fileSize' in resource;
}

export function isTutorialResource(resource: ResourceItem): resource is TutorialResource {
  return 'duration' in resource;
}

export function isCaseStudyResource(resource: ResourceItem): resource is CaseStudyResource {
  return 'viewCount' in resource && !('duration' in resource);
}
