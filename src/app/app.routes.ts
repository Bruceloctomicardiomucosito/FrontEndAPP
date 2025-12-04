import { Routes } from '@angular/router';
import { AlumnosEndpoints } from './alumnos-endpoints/alumnos-endpoints';
import { AsignacionDocenteMateriasEndpoints } from './asignacion-docente-materias-endpoints/asignacion-docente-materias-endpoints';
import { AsignacionGruposAulasEndpoints } from './asignacion-grupos-aulas-endpoints/asignacion-grupos-aulas-endpoints';
import { AsignacionPracticantesEndpoints } from './asignacion-practicantes-endpoints/asignacion-practicantes-endpoints';
import { AsistenciaRemotaEndpoints } from './asistencia-remota-endpoints/asistencia-remota-endpoints';
import { AulasEndpoints } from './aulas-endpoints/aulas-endpoints';
import { DocentesEndpoints } from './docentes-endpoints/docentes-endpoints';
import { EdificiosEndpoints } from './edificios-endpoints/edificios-endpoints';
import { EscuelasEndpoints } from './escuelas-endpoints/escuelas-endpoints';
import { FormAnexo6Endpoints } from './form-anexo6-endpoints/form-anexo6-endpoints';
import { GruposEndpoints } from './grupos-endpoints/grupos-endpoints';
import { LicenciaturasEndpoints } from './licenciaturas-endpoints/licenciaturas-endpoints';
import { MateriasEndpoints } from './materias-endpoints/materias-endpoints';
import { ModulosEndpoints } from './modulos-endpoints/modulos-endpoints';
import { NivelEducativoEndpoints } from './nivel-educativo-endpoints/nivel-educativo-endpoints';
import { SemestreActualEndpoints } from './semestre-actual-endpoints/semestre-actual-endpoints';
import { UsuariosActualEndpoints } from './usuarios-actual-endpoints/usuarios-actual-endpoints';
import { AsistenciaDiariaEndpoints } from './asistencia-diaria-endpoints/asistencia-diaria-endpoints';

export const routes: Routes = [
    {path: 'alumnos', component: AlumnosEndpoints},
    {path: 'asignacionDocenteMateriasEndpoints', component: AsignacionDocenteMateriasEndpoints},
    {path: 'asignacionGruposAulasEndpoints', component: AsignacionGruposAulasEndpoints},
    {path: 'asignacionPracticantesEndpoints', component: AsignacionPracticantesEndpoints},
    {path: 'asistenciaRemotaEndpoints', component: AsistenciaRemotaEndpoints},
    {path: 'asistenciasDiarias', component: AsistenciaDiariaEndpoints},
    {path: 'aulasEndpoints', component: AulasEndpoints},
    {path: 'docentesEndpoints', component: DocentesEndpoints},
    {path: 'edificiosEndpoints', component: EdificiosEndpoints},
    {path: 'escuelasEndpoints', component: EscuelasEndpoints},
    {path: 'formAnexo6Endpoints', component: FormAnexo6Endpoints},
    {path: 'gruposEndpoints', component: GruposEndpoints},
    {path: 'licenciaturasEndpoints', component: LicenciaturasEndpoints},
    {path: 'materiasEndpoints', component: MateriasEndpoints},
    {path: 'modulosEndpoints', component: ModulosEndpoints},
    {path: 'nivelEducativoEndpoints', component: NivelEducativoEndpoints},
    {path: 'semestreActualEndpoints', component: SemestreActualEndpoints},
    {path: 'usuariosActualEndpoints', component: UsuariosActualEndpoints}
];
