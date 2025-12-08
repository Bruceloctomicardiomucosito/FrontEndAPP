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
import { Home } from './home/home';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'asignaciones', children:[
            {path: 'DocenteMaterias', component: AsignacionDocenteMateriasEndpoints},
            {path: 'GruposAulas', component: AsignacionGruposAulasEndpoints},
            {path: 'Practicantes', component: AsignacionPracticantesEndpoints}
    ]},
    {path: 'infraestructura', children:[
            {path: 'edificios', component: EdificiosEndpoints},
            {path: 'aulas', component: AulasEndpoints},

    ]},
    {path: 'personal', children:[
            {path: 'docentes', component: DocentesEndpoints},
            {path: 'alumnos', component: AlumnosEndpoints}
    ]},
    {path: 'ofertaEducativa', children:[
            {path: 'licenciaturas', component: LicenciaturasEndpoints},
            {path: 'materias', component: MateriasEndpoints}
    ]},
    {path: 'tablasGenerales', children:[
            {path: 'escuelas', component: EscuelasEndpoints},
            {path: 'grupos', component: GruposEndpoints},
            {path: 'modulos', component: ModulosEndpoints},
            {path: 'nivelEducativo', component: NivelEducativoEndpoints},
            {path: 'asistenciasDiarias', component: AsistenciaDiariaEndpoints},
            {path: 'semestreActual', component: SemestreActualEndpoints}
    ]},
    {path: 'asistenciaRemotaEndpoints', component: AsistenciaRemotaEndpoints},
    {path: 'formAnexo6Endpoints', component: FormAnexo6Endpoints},
    {path: 'usuariosActualEndpoints', component: UsuariosActualEndpoints}
];
