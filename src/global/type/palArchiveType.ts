export interface PalArchive {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  updatedBy: string;
  archiveName: string;
  archiveDesc: string;
  archivePath: string;
  archiveSize: number;
}

export interface SaveArchive {
  archiveName: string;
  archiveDesc: string;
}