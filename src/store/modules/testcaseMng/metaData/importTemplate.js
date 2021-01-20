import { USER } from '@/api/apiModules'
export default {
  viewType: 'form',
  module: USER,
  okAction: 'importUser',
  view: {
    title: 'testcaseMng.templateImport',
    content: [
      {
        $id: 'templateFile',
        $type: 'upload-file',
        label: 'testcaseMng.templateFile',
        rules: [
          {
            notEmpty: {
              message: 'sk.form.common_term_file_valid'
            }
          },
          'longLength',
          {
            fileSize: {
              min: 1
            }
          },
          {
            suffix: {
              includeSuffixes: ['xlsx'],
              errorMessage: 'testcaseMng.uploadTemplateSuffix'
            }
          }
        ]
      },
      {
        $id: 'templateDownload',
        $type: 'sky-alert-description',
        props: {
          labelWidth: '0'
        },
        $el: {
          label: 'testcaseMng.templateImportLimitMsg',
          type: 'warning',
          actions: {
            label: 'testcaseMng.templateDownload',
            name: 'UmTemplateDownload'
          }
        }
      }
    ]
  }
}
