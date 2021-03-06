import { levelColumn, conditionColumn, strategyColumn, projectTableColumn } from '../utils'
import { getNameDescriptionTableColumn, getStatusTableColumn, getEnabledTableColumn } from '@/utils/common/tableColumn'

export default {
  created () {
    this.columns = [
      getNameDescriptionTableColumn({
        onManager: this.onManager,
        hideField: true,
        edit: true,
        formRules: [{ required: true, message: `${this.$t('common.placeholder')}${this.$t('common.name')}` }],
        slotCallback: row => {
          return (
            <side-page-trigger onTrigger={() => this.handleOpenSidepage(row)}>{ row.name }</side-page-trigger>
          )
        },
      }),
      getStatusTableColumn({ statusModule: 'commonalert', minWidth: 50 }),
      getEnabledTableColumn({ minWidth: 50 }),
      strategyColumn,
      levelColumn,
      conditionColumn,
      projectTableColumn,
    ]
  },
}
