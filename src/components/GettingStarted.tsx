import { CodeBlock } from './CodeBlock';
import { Translation } from '@/lib/i18n';

interface GettingStartedProps {
  translation: Translation;
}

export function GettingStarted({ translation }: GettingStartedProps) {
  const configureUrlCode = `
  data -> Binary type
  uuid -> UUID
  timestamps -> Double
`;

  const apiPathsCode = `import Foundation
import DataStack
import CoreData

struct UserModel: Codable {
    let id: Int
    let name: String
}

extension UserEntity {
    typealias Model = UserModel
    func getModel() throws -> Model? {
        return try makeModel(withData: self.data, ofType: Model.self) as? Model
    }
}`;

  const modelsCode = `
// 1
import Foundation
import CoreData
import DataStack

final class PersistenceController: CDPersistenceController, @unchecked Sendable {
    
    private static let configuration: CoreDataConfiguration = .init()
    
    nonisolated(unsafe) static var preview: CDPersistenceController = {
        return preview(withConfiguration: configuration)
    }()
    
    static let shared = PersistenceController(withConfiguration: configuration)
}}

// 2
import Foundation
import CoreData
import SwiftFake
import DataStack

struct CoreDataConfiguration: CDConfigurationProtocol, Sendable {
    
    var dbName: String {"Model"}
    
    func generateFakeModelInMemory(fake: FakeRecords, context: NSManagedObjectContext) throws {
        
        // Isso não esta funcionando
        // try OABFakeMatters.create(fake: fake, context: context, numberOfRegisters: 20)
        
    }
    
}

// 3

import DataStack

extension CDManagedObjectProtocol {
    var manager: CDPersistentStore<Int> { CDPersistentStore(controller: PersistenceController.shared) }
}
`;

  const requestCode = `
import Foundation
import DataStack

class UserCoreData: CDManagedObjectProtocol, @unchecked Sendable {
    
    typealias Model = UserModel
    typealias Entity = UserEntity
    typealias KeyID = Int
    
    required init() {}
    
    func get() throws -> UserModel? {
        return try manager.getUnique(ofType: Entity.self)?.getModel()
    }
    
    func save(model: UserModel?) async throws {
        try manager.saveUnique(withModel: model, andCoreDataType: Entity.self)
    }
    
    func update(model: UserModel?, keyOf: String) throws {
        try manager.update(withModel: model, coreDataType: Entity.self, keyOf: keyOf)
    }
    
    func delete(model: UserModel, keyOf: String) throws {
        try manager.delete(withModel: model, coreDataType: Entity.self, keyOf: keyOf)
    }
    
    func expired(expirationTime: Double, keyID: Int?) throws -> Bool {
        true
    }
    
}
`;

  const swiftuiCode = `
    
    @Published var users: [UserModel] = []
    
    @CDFactory
    private var userCoreData: UserCoreData
    
    func save(model: UserModel) {
        do {
            
            var models = try userManyCoreData.getObjects()
            models.append(model)
            self.users = models
            
            try userManyCoreData.save(models: models)
        } catch {
            print("Erro on save many \(error)")
        }
    }
    
    func getMany() {
       
            do {
                self.users = try userCoreData.getObjects()
            } catch {
                print("Erro on get mahy \(error)")
            }
    }
    
}
`;

  return (
    <section id="getting-started" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {translation.gettingStarted.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Step 1 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.configureDataModel}
            </h3>
            <p className="text-muted-foreground mb-6">
              Crie um modelo de CoreData com a seguinte estrutura
            </p>
            <CodeBlock code={configureUrlCode} />
          </div>

          {/* Step 2 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.configurePaths}
            </h3>
            <CodeBlock code={apiPathsCode} />
          </div>

          {/* Step 3 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.defineModels}
            </h3>
            <CodeBlock code={modelsCode} />
          </div>

          {/* Step 4 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.createRequest}
            </h3>
            <CodeBlock code={requestCode} />
          </div>

          {/* Step 5 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.swiftuiIntegration}
            </h3>
            <p className="text-muted-foreground mb-6">
              Voce consegue tambem gerenciar para ter somente um dado no CoreData, para isso basta usar o protocolo CDManagedObjectProtocolao inves de CDManagedGroupObjectProtocol
            </p>
            <CodeBlock code={swiftuiCode} />
            <p className="text-sm text-muted-foreground mt-2">
              Closures are also supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}