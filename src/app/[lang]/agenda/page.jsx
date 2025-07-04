import Agenda from '@views/_mcb/agenda'

import { getServerMode } from '@core/utils/serverHelpers'

const AgendaPage = async () => {

  const mode = await getServerMode()

  return <Agenda mode={mode} />
}

export default AgendaPage
