import gql from 'graphql-tag';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  0: 'Click button to add selected files associated with the selected case(s).',
  1: 'Click button to add selected files associated with the selected sample(s).',
  2: 'Click button to add selected files.',
};

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Tabs Table configuration --------------
export const tabContainers = [
  {

    name: 'Cases',
    dataField: 'dataCase',
    defaultSortField: 'subject_id',
    defaultSortDirection: 'asc',
    buttonText: 'Add Selected Files',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#09A175',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    ActiveSaveButtonDefaultStyle: {
      disabled: 'true',
      opacity: '0.3',
      cursor: 'auto',
    },
    DeactiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    columns: [
      {
        dataField: 'subject_id',
        header: 'Case ID',
        sort: 'asc',
        link: '/case/{subject_id}',
        primary: true,
        display: true,
      },
      {
        dataField: 'program',
        header: 'Program Code',
        sort: 'asc',
        link: '/program/{program_id}',
        display: true,
      },
      {
        dataField: 'program_id',
        header: 'Program ID',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'study_acronym',
        header: 'Arm',
        sort: 'asc',
        link: '/arm/{study_acronym}',
        display: true,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'recurrence_score',
        header: 'Recurrence Score',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'tumor_size',
        header: 'Tumor Size (cm)',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'er_status',
        header: 'ER Status',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'pr_status',
        header: 'PR Status',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'age_at_index',
        header: 'Age (years)',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'survival_time',
        header: 'Survival (days)',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'cohort_description',
        header: 'Cohort',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'case_tab',
    onRowsSelect: 'type1',
    disableRowSelection: 'type1',
    tableID: 'case_tab_table',
    selectableRows: true,
    tabIndex: '0',
    downloadFileName: 'Bento_Dashboard_cases_download',
  },
  {
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#00AEEF',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    ActiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    DeactiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    name: 'Samples',
    dataField: 'dataSample',
    columns: [
      {
        dataField: 'sample_id',
        header: 'Sample ID',
        sort: 'asc',
        primary: true,
        display: true,
      },
      {
        dataField: 'subject_id',
        header: 'Case ID',
        sort: 'asc',
        link: '/program/{subject_id}',
        display: true,
      },
      {
        dataField: 'program',
        header: 'Program Code',
        sort: 'asc',
        link: '/program/{program_id}',
        display: true,
      },
      {
        dataField: 'arm',
        header: 'Arm',
        sort: 'asc',
        link: '/arm/{study_acronym}',
        display: true,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'tissue_type',
        header: 'Tissue Type',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'tumor_size',
        header: 'Tumor Size (cm)',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'tissue_composition',
        header: 'Tissue Composition',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'sample_anatomic_site',
        header: 'Sample Anatomic Site',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'sample_procurement_method',
        header: 'Sample Procurement Method',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'platform',
        header: 'platform',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'sample_tab',
    onRowsSelect: 'type3',
    disableRowSelection: 'type2',
    buttonText: 'Add Selected Files',
    tableID: 'sample_tab_table',
    selectableRows: true,
    tabIndex: '1',
    downloadFileName: 'Bento_Dashboard_cases_download',
  },
  {
    name: 'Files',
    dataField: 'dataFile',
    buttonText: 'Add Selected Files',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#DC2FDA',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    ActiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    DeactiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    columns: [
      {
        dataField: 'file_id',
        header: 'File ID',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_name',
        header: 'File Name',
        sort: 'asc',
        link: '/program/{program_id}',
        primary: true,
        display: true,
      },
      {
        dataField: 'association',
        header: 'Association',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_description',
        header: 'Description',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_format',
        header: 'Format',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_size',
        header: 'Size',
        sort: 'asc',
        display: true,
        formatBytes: true,
      },
      {
        dataField: 'program',
        header: 'Program Code',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'arm',
        header: 'Arm',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'subject_id',
        header: 'Case ID',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'sample_id',
        header: 'Sample ID',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'diagnosis',
        header: 'Diagnosis',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'file_tab',
    onRowsSelect: 'type2',
    disableRowSelection: 'type3',
    tableID: 'file_tab_table',
    selectableRows: true,

    tabIndex: '2',
    downloadFileName: 'Bento_Dashboard_cases_download',
  },
];

// --------------- Tabs Header Data configuration --------------
export const tabs = [
  {
    id: 'case_tab',
    name: 'Cases',
    dataField: 'dataCase',
    count: 'numberOfSubjects',
  },
  {
    id: 'sample_tab',
    name: 'Samples',
    dataField: 'dataSample',
    count: 'numberOfSamples',
  },
  {
    id: 'file_tab',
    name: 'Files',
    dataField: 'dataFile',
    count: 'numberOfFiles',
  },
];

// --------------- Tabs Header Style configuration --------------
export const tabIndex = {
  0: {
    title: 'Cases',
    primaryColor: '#D6F2EA',
    secondaryColor: '#FFDFB8',
    selectedColor: '#10A075',
  },
  1: {
    title: 'Samples',
    primaryColor: '#CFEDF9',
    secondaryColor: '#C9F1F1',
    selectedColor: '#0DAFEC',
  },
  2: {
    title: 'Files',
    primaryColor: '#F7D7F7',
    secondaryColor: '#86D6F0',
    selectedColor: '#C92EC7',
  },
};

export const DASHBOARD_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfLabProcedures
  numberOfFiles
  subjectCountByProgram{
        group
        subjects
      }
    subjectCountByStudy{
        group
        subjects
      }
    subjectCountByDiagnoses{
        group
        subjects
      }
    subjectCountByRecurrenceScore{
        group
        subjects
      }
    subjectCountByTumorSize{
        group
        subjects
      }
    subjectCountByChemotherapyRegimen{
        group
        subjects
      }
    subjectCountByTumorGrade{
        group
        subjects
      }
  subjectCountByErStatus{
        group
        subjects
      }
  subjectCountByPrStatus{
        group
        subjects
      }
  subjectCountByMenopauseStatus{
        group
        subjects
      }
  subjectCountByChemotherapyRegimen{
        group
        subjects
      }
      subjectCountByEndocrineTherapy{
    group
    subjects
  }
    armsByPrograms {
        program
        caseSize
        children {
            arm
            caseSize
            size
        }
    }

  subjectOverViewPaged(first: 1000000) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
    sampleOverview {
        sample_id
        subject_id
        program
        arm
        diagnosis
        tissue_type
        tissue_composition
        sample_anatomic_site
        sample_procurement_method
        platform
        files 
    }
    
    fileOverview {
        file_id
        file_name
        association
        file_description
        file_format
        file_size
        program
        arm
        subject_id
        sample_id
        diagnosis
    }
  }`;

export const FILTER_GROUP_QUERY = gql`
  query groupCounts($subject_ids: [String]){
   subjectCountByProgram(subject_ids: $subject_ids) {
       group
       subjects
   }
   subjectCountByStudy(subject_ids: $subject_ids) {
       group
       subjects
   }
   subjectCountByDiagnoses (subject_ids: $subject_ids){
       group
       subjects
   }
   subjectCountByRecurrenceScore (subject_ids: $subject_ids){
       group
       subjects
   }
   subjectCountByTumorSize(subject_ids: $subject_ids) {
       group
       subjects
   }
   subjectCountByChemotherapyRegimen(subject_ids: $subject_ids) {
       group
       subjects
   }
   subjectCountByEndocrineTherapy (subject_ids: $subject_ids){
       group
       subjects
   }
   subjectCountByTumorGrade(subject_ids: $subject_ids){
       group
       subjects
   }
   subjectCountByErStatus(subject_ids: $subject_ids){
       group
       subjects
   }
   subjectCountByPrStatus(subject_ids: $subject_ids){
       group
       subjects
   }
   subjectCountByMenopauseStatus(subject_ids: $subject_ids){
       group
       subjects
   }
   subjectCountByFileType (subject_ids: $subject_ids){
       group
       subjects
   }
   subjectCountByFileAssociation(subject_ids: $subject_ids) {
       group
       subjects
   }
   subjectCountByTissueComposition(subject_ids: $subject_ids) {
       group
       subjects
   }
   subjectCountByTissueType(subject_ids: $subject_ids) {
       group
       subjects
   }
   armsByPrograms(subject_ids: $subject_ids) {
     program
     caseSize
     children {
         arm
         caseSize
         size
     }
 }
   
}
 `;

export const FILTER_QUERY = gql`
 query search (          
   $programs: [String] ,
   $studies: [String] ,
   $diagnoses: [String] ,
   $rc_scores: [String] ,
   $tumor_sizes: [String] ,
   $chemo_regimen: [String] ,
   $tumor_grades: [String] ,
   $er_status: [String] ,
   $pr_status: [String] ,
   $endo_therapies: [String] ,
   $meno_status: [String] ,
   $first: Int 
){
   searchSubjects (          
       programs: $programs,
       studies: $studies,
       diagnoses: $diagnoses,
       rc_scores: $rc_scores,
       tumor_sizes: $tumor_sizes,
       chemo_regimen: $chemo_regimen,
       tumor_grades: $tumor_grades,
       er_status: $er_status,
       pr_status: $pr_status,
       endo_therapies: $endo_therapies,
       meno_status: $meno_status,
       first: $first
   ) {
     numberOfPrograms
     numberOfStudies
     numberOfSubjects
     numberOfSamples
     numberOfLabProcedures
     numberOfFiles
       subjectIds
       firstPage {
         subject_id
         program_id
         study_info
         samples
         program
         study_acronym
         diagnosis
         recurrence_score
         tumor_size
         tumor_grade
         er_status
         pr_status
         chemotherapy
         endocrine_therapy
         menopause_status
         age_at_index
         survival_time
         lab_procedures
         files{
           file_id
         }
       }
   }
}`;
